
//------------------------------------------------------------------------------
Ext.define('MC.view.game_widgets.Widget_PowerBar', {
    extend: 'Ext.container.Container',
    alias: 'widget.power_bar',

	layout: 'absolute',
	power: 50,
	height: 14,
	
	// Configurable bar options...
	//--------------------------------------
	bar_width: 91,
	bar_color: '#f20',
	preview_bar_color: '#ff0',
	preview_bar_width: 7, // odd number should allow proper centering
	tool_tip_text: 'nothing', // initialized in initComponent
	//--------------------------------------
	
  
	// This exists to bind a tooltip to an Ext container object that otherwise doesn't directly
	//	support the easy way to bind a tooltip.
	//--------------------------------------------------------------------------
	listeners : {
		afterrender : function(widget_container) {
			widget_container.tip = Ext.create('Ext.tip.ToolTip', {
				target : widget_container.getEl().getAttribute("id"),
				anchor: 'left',
				anchorOffset: 0,
				renderTo : document.body,
				minWidth: 100,
				showDelay: 0,
				dismissDelay: 0,
				hideDelay: 0,
				style: {
					'border-color': '#000'
				},
				listeners: {
					// Change content dynamically depending on which element triggered the show.
					beforeshow: function updateTipBody(tip) {
						tip.update(widget_container.tool_tip_text);
					}
				}
			});
		}
	},
	
    //--------------------------------------------------------------------------
    initComponent: function() {
    	
        var me = this;
        me.width = me.bar_width;
        me.tool_tip_text = 'Power: ' + me.power;
        
        Ext.applyIf(me, {
			items: [{
				xtype: 'container',
				itemId: 'power_bar',
				width: me.power,
				height: me.height,
				style: {
					'background-color': me.bar_color
				}
			},{
				xtype: 'container',
				width: me.bar_width,
				height: me.height,
				style: {
					'background-image':'url(app/images/bar_overlay.png)'
				}
			},{
				xtype: 'container',
				itemId: 'preview_bar',
				hidden: true, // only shows in preview mode
				x: me.power,
				width: me.preview_bar_width,
				height: me.height,
				style: {
					border: '2px solid ' + me.preview_bar_color
				}
			}]
		});
				
        me.callParent(arguments);
    },
    
    //--------------------------------------------------------------------------
    setPower: function(newPower) {
    	
    	this.power = newPower;
        this.tool_tip_text = 'Power: ' + this.power;
        
        var previewBar = this.getComponent('preview_bar');
    	previewBar.hide();
    	
    	this.getComponent('power_bar').animate({
    		duration: 100,
    		to: {
    			width: newPower
    		}
    	});
    },
    
    //--------------------------------------------------------------------------
    previewPower: function(newPower) {
    	
    	var previewBar = this.getComponent('preview_bar');
    	var powerBar = this.getComponent('power_bar');
    	
    	if (this.power == newPower) {
    		// Value would be the same, so just hide it? ie, no change?
    		// TODO: consider whether this is the right thing to do or if it just looks like a bug...
    		previewBar.hide(true);
    	}
    	else {
    		// center bar x around desired power value...
    		var moveToX = powerBar.getX() + (newPower - (previewBar.getWidth() / 2));
    		
    		previewBar.show();
    		previewBar.animate({
				to: {
					x: moveToX
				}
			});
		}
    }
	
});

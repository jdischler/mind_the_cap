
// FIXME: this container just served to pad the upgrade elements out in the
//	upgrades-list container...If padding can be made to work around the edge of
//	the inside container (the one that has the icon and the dashed border), then
//	we could remove one level of nesting here...
//------------------------------------------------------------------------------
Ext.define('MC.view.game_widgets.Widget_UpgradeItem', {
    extend: 'Ext.container.Container',
    alias: 'widget.upgrade_item',

	width: 32,
	height: 28,
	layout: 'absolute',

	// configurable widget options...
	//--------------------------------------
	widget_icon: 'url(app/images/save_small_icon.png)',
	widget_background: 'rgba(255,255,255,0.3)',
	tool_tip_text: 'Nothing for now...',
	//--------------------------------------

	// This exists to bind a tooltip to an Ext container object that otherwise doesn't directly
	//	support the easy way to bind a tooltip.
	//--------------------------------------------------------------------------
	listeners : {
		afterrender : function(widget_container) {
			widget_container.tip = Ext.create('Ext.tip.ToolTip', {
				target : widget_container.getEl().getAttribute("id"),
				anchor: 'top',
				anchorOffset: -5,
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

        Ext.applyIf(me, {
			items: [{
				xtype: 'container',
				itemId: 'icon_container',
				x: 1,
				y: 0,
				width: 28,
				height: 28,
				style: {
					'background-color': me.widget_background,
					'background-image': me.widget_icon,
					'background-repeat':'no-repeat',
					'background-position':'center center',
					border: '1px dotted #444'
				}
			}]
		});
				
        me.callParent(arguments);
    },
    
    //--------------------------------------------------------------------------
    updateInfo: function(newIcon, newHoverText) {
    	
    	this.getComponent('icon_container').getEl().applyStyles({'background-image': newIcon});
    	this.tool_tip_text = newHoverText;
    }
	
});

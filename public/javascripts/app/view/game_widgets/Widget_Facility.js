
//------------------------------------------------------------------------------
Ext.define('MC.view.game_widgets.Widget_Facility', {
    extend: 'Ext.container.Container',
    alias: 'widget.facility',

    requires: [
    	'MC.view.game_widgets.Widget_PowerBar',
    	'MC.view.game_widgets.Widget_UpgradesList',
    	'MC.view.game_widgets.Widget_UpgradeItem'
    ],
    
	layout: 'absolute',
	width: 200,
	height: 230,
	style: {
		'background-image':'url(app/images/power_facility.png)',
		'background-repeat':'no-repeat',
		'background-position':'center center'
	},
   
	// Configurable widget options...
	//--------------------------------------
	// 		currently none
	//--------------------------------------
	
    //--------------------------------------------------------------------------
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
			items: [{
				xtype: 'upgrades_list',
				itemId: 'displayed_upgrades',
				x: 0,
				y: 7
			},{
				xtype: 'power_bar',
				itemId: 'emissions_display',
				x: 82,
				y: 156
			},
			{
				xtype: 'power_bar',
				itemId: 'production_display',
				bar_color: '#0a0',
				x: 82,
				y: 174
			},{
				xtype: 'button',
				x: 24,
				y: 198,
				width: 70,
				scale: 'small',
				text: 'Info',
				tooltip: {
					text: 'Not hooked up but could display some pop up info...'
				}
			},{
				xtype: 'button',
				x: 105,
				y: 198,
				width: 70,
				scale: 'small',
				text: 'Upgrade',
				tooltip: {
					text: 'Add a fake upgrade'
				},
				handler: function(self) {
					self.up().addTestUpgrade('url(app/images/save_small_icon.png)');
				}
			}]
		});
				
        me.callParent(arguments);
    },
    
    //--------------------------------------------------------------------------
    addTestUpgrade: function(icon_string) {
    	
    	var me = this;
    	var upgrade = Ext.create('MC.view.game_widgets.Widget_UpgradeItem', 
    		{ widget_icon: icon_string });
    	
    	// gets a Widget_UpgradesList type and add a new upgrade to it...
    	me.getComponent('displayed_upgrades').add(upgrade);
    	
    	// --- TESTING upgrade updateInfo function...
    	var newHoverText = 'blah blah blah';
    	if (Math.random() > 0.5) {
    		if (Math.random() > 0.5) {
    			newHoverText = 'yes yes yes yes';
    		}
    		upgrade.updateInfo('url(app/images/spinner_16a.gif)', newHoverText);
    	}
    	
    	// --- TESTING updating power bars...
    	// FIXME: better to have the setPower take some specific range, e.g.
    	//	0 to 1, or 0 to 100, or...vs a range which is tied to the size of the widget...
    	var min = 10, max = 80;
    	var fakeResult = Math.floor(Math.random()*(max-min+1)+min);
    	// gets a Widget_PowerBar type
    	me.getComponent('emissions_display').previewPower(fakeResult);
    	me.getComponent('production_display').previewPower(max - fakeResult + min);
    }
	
});

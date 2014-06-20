
//------------------------------------------------------------------------------
Ext.define('MyApp.view.corbett.FacilityTestWindow', {
    extend: 'Ext.window.Window',

    requires: [
    	'MyApp.view.corbett.Widget_Facility'
    ],
    
	title: 'Test Window',

	layout: 'fit',
	bodyPadding: 5,
    width: 660,
    height: 515,
    
    // Add a button to allow adding a new facility...
    //--------------------------------------------------------------------------
    tools:[{
		type: 'refresh',
		tooltip: 'Add a new facility',
		handler: function(event, toolEl, panelHeader) {
			var facilityList = panelHeader.up().getComponent('facility_holder_container');
			
			var newFacility = Ext.create("MyApp.view.corbett.Widget_Facility");
			facilityList.add(newFacility);
		}
	}],
	
    //--------------------------------------------------------------------------
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
			items: [{
				xtype: 'container',
				itemId: 'facility_holder_container',
				style: {
					'background-color':'#bbb'
				},
				layout: {
					type: 'column',
					reserveScrollbar: true
				},
				overflowY: 'auto',
				items: [{
					xtype: 'facility'
				},
				{
					xtype: 'facility'
				},
				{
					xtype: 'facility'
				},
				{
					xtype: 'facility'
				}]
			}]
		});
				
        me.callParent(arguments);
    }
	
});


//------------------------------------------------------------------------------
Ext.define('MC.view.MainViewport', {
//------------------------------------------------------------------------------

	extend: 'Ext.container.Viewport',
    requires: [
    	'MC.view.game_widgets.Widget_Facility'
    ],
	
	autoScroll: true,
	layout: {
		type: 'fit'
	},
	
	id: 'MC_MainViewport',
	
	//--------------------------------------------------------------------------
	initComponent: function() {
		
		var me = this;
		
        Ext.applyIf(me, {
			items: [{
				xtype: 'container',
				itemId: 'main',
				layout: {
					type: 'vbox',
					align: 'center'
				},
				style: 'background-image:url(app/images/bg.jpg); background-size:cover; background-repeat:no-repeat;background-attachment:fixed;background-position: center top;',
				items: [{
					xtype: 'container',
					layout: 'column',
					width: 1100,
					height: 800,
					items: [{
						xtype: 'container',
						columnWidth: 0.45,
						items: [{
							xtype: 'panel',
							title: 'This will be the progress panel',
							height: 100
						}, {
							xtype: 'panel',
							title: 'This will be the factory panel',
							height: 700,
							layout: 'fit',
							// Add a button to allow adding a new facility...
							//--------------------------------------------------------------------------
							tools:[{
								type: 'refresh',
								tooltip: 'Add a new facility',
								handler: function(event, toolEl, panelHeader) {
									var facilityList = panelHeader.up().getComponent('facility_holder_container');
									
									var newFacility = Ext.create("MC.view.game_widgets.Widget_Facility");
									facilityList.add(newFacility);
								}
							}],
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
						}]
					},{
						xtype: 'panel',
						title: 'This will be the info panel',
						columnWidth: 0.55,
						height: 800,
						layout: {
							type: 'accordion',
							titleCollapse: false,
							multi: true
						}
					}]
				}]
			}]
        });
		
		me.callParent(arguments);
	}
	
});


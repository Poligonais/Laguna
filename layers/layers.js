var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoIIImvelAnexoaoPorto_1 = new ol.format.GeoJSON();
var features_AnexoIIImvelAnexoaoPorto_1 = format_AnexoIIImvelAnexoaoPorto_1.readFeatures(json_AnexoIIImvelAnexoaoPorto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIImvelAnexoaoPorto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIImvelAnexoaoPorto_1.addFeatures(features_AnexoIIImvelAnexoaoPorto_1);
var lyr_AnexoIIImvelAnexoaoPorto_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIImvelAnexoaoPorto_1, 
                style: style_AnexoIIImvelAnexoaoPorto_1,
                popuplayertitle: "Anexo II - Imóvel Anexo ao Porto",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIImvelAnexoaoPorto_1.png" /> Anexo II - Imóvel Anexo ao Porto'
            });
var format_AnexoIPolgonoPrincipal_2 = new ol.format.GeoJSON();
var features_AnexoIPolgonoPrincipal_2 = format_AnexoIPolgonoPrincipal_2.readFeatures(json_AnexoIPolgonoPrincipal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIPolgonoPrincipal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIPolgonoPrincipal_2.addFeatures(features_AnexoIPolgonoPrincipal_2);
var lyr_AnexoIPolgonoPrincipal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIPolgonoPrincipal_2, 
                style: style_AnexoIPolgonoPrincipal_2,
                popuplayertitle: "Anexo I - Polígono Principal ",
                interactive: true,
                title: '<img src="styles/legend/AnexoIPolgonoPrincipal_2.png" /> Anexo I - Polígono Principal '
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoIIImvelAnexoaoPorto_1.setVisible(true);lyr_AnexoIPolgonoPrincipal_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoIIImvelAnexoaoPorto_1,lyr_AnexoIPolgonoPrincipal_2];
lyr_AnexoIIImvelAnexoaoPorto_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIPolgonoPrincipal_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIImvelAnexoaoPorto_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIPolgonoPrincipal_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIImvelAnexoaoPorto_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPolgonoPrincipal_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPolgonoPrincipal_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
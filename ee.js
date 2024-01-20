//add level glb//
const position5 = Cesium.Cartesian3.fromDegrees(121.2714495738, 24.8764472952, 219.4614776229);
const heading5 = Cesium.Math.toDegrees(270);
const pitch5 = 0;
const roll5 = 0;
const hpr5 = new Cesium.HeadingPitchRoll(heading2, pitch2, roll2);
const orientation5 = Cesium.Transforms.headingPitchRollQuaternion(position2, hpr2);
const url5 = await Cesium.IonResource.fromAssetId(2428291);
const level = viewer.entities.add({
    name: 'AGA-=',
    position: position5,
    orientation: orientation5,
    model: {
        uri: url5,
        //uri: './3D_model/distance.glb',
        scale: 100,
        luminanceAtZenith: 0.2,
    },
});
//启动初始化

class Init3D {
  constructor() {
    this.initThree();
  }

  initThree() {
    let width = 60;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(width, window.innerWidth/window.innerHeight, 0.1, 10000);
    this.renderer = new THREE.WebGLRenderer();
    // this.renderer.setClearColor(new THREE.Color('#fff', 1));
    //绘制区域
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    //阴影支持
    this.renderer.shadowMapEnabled = true;
    let planeGeometry = new THREE.PlaneGeometry(100, 60);
    //反光材质
    let planeMaterial = new THREE.MeshLambertMaterial({ color: "#fff" });
    //创建一个几何平面
    this.plane = new THREE.Mesh( planeGeometry, planeMaterial );
    this.plane.position.set(15, 0, 0);
    this.scene.add(this.plane);
  }
}

class Start3d extends Init3D {
  constructor() {
    super();
    this.start();
  }

  start() {
    //一个正方形
    this.boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    this.boxMaterial = new THREE.MeshLambertMaterial({ color: 'red' });
    this.box = new THREE.Mesh(this.boxGeometry, this.boxMaterial);
    //支持阴影特效
    this.box.castShadow = true;
    this.box.position.set(-4, 0, 0);
    this.scene.add(this.box);
    //相机的位置
    this.camera.position.set(15, 30, 260);
    this.camera.lookAt(this.scene.position);
    //加入环境光
    //加入点光源
    this.spotLight = new THREE.SpotLight('#fff');

    this.spotLight.position.set(100, 100, 100);
    this.spotLight.castShadow = true;
    //加入场景
    this.scene.add(this.spotLight);
    document.body.appendChild(this.renderer.domElement);
    // //渲染
    this.renderer.render(this.scene, this.camera);
  }

}


new Start3d();
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function DanhSachXucXac({ backgroundColor }) {
  const sceneRef = useRef(null);

  useEffect(() => {
    const col4Width = sceneRef.current.clientWidth;
    const localSceneRef = sceneRef.current;
    // Khởi tạo scene
    const scene = new THREE.Scene();

    // Khởi tạo camera
    const camera = new THREE.PerspectiveCamera(
      75,
      col4Width / window.innerHeight, // Sử dụng kích thước của col-4
      0.1,
      1000
    );
    camera.position.z = 5;

    // Khởi tạo renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(col4Width, col4Width); // Sử dụng kích thước của col-4
    scene.background = new THREE.Color(backgroundColor);
    sceneRef.current.appendChild(renderer.domElement);

    // Tạo đĩa màu trắng
    const diskGeometry = new THREE.CircleGeometry(2, 32);
    const diskMaterial = new THREE.MeshBasicMaterial({
      color: "white",
    });
    const disk = new THREE.Mesh(diskGeometry, diskMaterial);
    scene.add(disk);

    // Tạo 3 cục xúc xắc và giảm kích thước
    const diceGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6); // Giảm kích thước cục xúc xắc
    const texturePaths = [
      "./img/bau.png",
      "./img/ca.png",
      "./img/cua.png",
      "./img/ga.png",
      "./img/nai.png",
      "./img/tom.png",
    ];
    const diceMaterials = texturePaths.map((texturePath) => {
      return new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(texturePath),
      });
    });

    // Tạo cục xúc xắc trên
    const topDice = new THREE.Mesh(diceGeometry, diceMaterials);
    topDice.position.y = 0.5; // Đặt vị trí theo chiều cao
    scene.add(topDice);

    // Tạo cục xúc xắc dưới trái
    const bottomLeftDice = new THREE.Mesh(diceGeometry, diceMaterials);
    bottomLeftDice.position.x = -1; // Đặt vị trí theo chiều ngang
    bottomLeftDice.position.y = -0.5; // Đặt vị trí theo chiều cao
    scene.add(bottomLeftDice);

    // Tạo cục xúc xắc dưới phải
    const bottomRightDice = new THREE.Mesh(diceGeometry, diceMaterials);
    bottomRightDice.position.x = 1; // Đặt vị trí theo chiều ngang
    bottomRightDice.position.y = -0.5; // Đặt vị trí theo chiều cao
    scene.add(bottomRightDice);
    // Đặt vị trí của đĩa cao lên trên
    disk.position.z = 0.1;
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Xoay cục xúc xắc
      scene.children
        .filter((child) => child instanceof THREE.Mesh && child !== disk)
        .forEach((dice) => {
          dice.rotation.x += 0.01;
          dice.rotation.y += 0.01;
        });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      // Remove renderer.domElement
      localSceneRef.removeChild(renderer.domElement);
    };
  }, [backgroundColor]);

  return <div ref={sceneRef}></div>;
}

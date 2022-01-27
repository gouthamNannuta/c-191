AFRAME.registerComponent('drive', {
    init: function(){
        this.carDrive()
    },
    carDrive: function(){
        
        var multiply = 10;
        var wheelRotation = 0;
        console.log("here")

        window.addEventListener('keydown', function (e) {
            var cameraRig = document.querySelector("#camera-rig")
            var cameraPosition = cameraRig.getAttribute("position")
            var cameraMoveControl = cameraRig.getAttribute("movement-controls")
            var cameraRotation = cameraRig.getAttribute("rotation")

            console.log(cameraRotation)
            
            if (e.code == "ArrowRight") {
                cameraRotation.y -= 10
                cameraRig.setAttribute("rotation", { x: 0, y: cameraRotation.y, z: 0 })                
                cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 0.005})

            }
            
            if (e.code == "ArrowLeft") {
                cameraRotation.y += 10
                cameraRig.setAttribute("rotation", { x: 0, y: cameraRotation.y, z: 0 })             
                cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 0.005})

            }

            if (e.code == "ArrowUp") {
                multiply += 0.5

                if (multiply <= 100 && cameraPosition.z > -500) {                  
                    cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 0.005})
                    
                    //var carSpeed = document.querySelector("#speed")
                    //carSpeed.setAttribute("text", { value: multiply });
                }

            }
            //Stop/break on Space Keydown
            if (e.code == "ArrowDown") {            
                cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed - 0.005})
            }
        })
    }
})
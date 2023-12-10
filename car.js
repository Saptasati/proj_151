AFRAME.registerComponent('car', {
  schema:{
      position:{type:'number', default:1},
      rotation:{type: 'number', default: 1}
  },
  init:function(){

      
      var position = {x:0, y:0, z:0 }
      
      this.el.setAttribute('position', position)

      var rotation = {x:0, y:0, z:0 }
     
      this.el.setAttribute('position', rotation)
  }

})

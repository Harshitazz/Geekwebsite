


function BGSphere({width, height, x, y, color}){
   return (
      <div style={{
         width: width,
         height: height,
         position: 'absolute',
         left: x,
         top: y,
         borderRadius: '50%',
         background: color,
         filter: 'blur(110px)',
         overflow: 'hidden',
         zIndex: -1,
         transform: 'translate(-50%, -50%)'
      }}></div>
   )
}  

export default BGSphere;
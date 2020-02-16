module.exports = (req,res,next)=>{
  console.log('Route not found');
  res.status(404);
  res.send('Cannot find the page your looking for');
  res.end();
};
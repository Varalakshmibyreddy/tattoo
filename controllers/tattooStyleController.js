const TattooStyle = require('../models/TattooStyle')

const createTattooStyle = async (req,res)=>{
    try{
        const {subscription_id, email} = req.body
        // console.log(style_id,style_name,image)
        const tattooStyle = new TattooStyle({
          subscription_id,email
        })
        await tattooStyle.save()
        res.status(200).json(tattooStyle)
}
catch(error){
    console.log(`There is an error ${error}`);
    res.status(400).json({message:'error '})
}
}

const getTattooStyle = async (req, res) => {
    try {
      // Fetch all tattoo styles from the database
      const tattooStyles = await TattooStyle.find();
      res.status(200).json(tattooStyles);
    } 
    catch (error) {
      console.error("Error fetching tattoo styles:", error);
      res.status(500).json({ message: "Server error. Please try again later." });
    }
  };

module.exports = {createTattooStyle,getTattooStyle}
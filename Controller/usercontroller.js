
const mobiledetails = require('../Model/usermodel');

const mobile_brand = async(req,res)=>{
    try{
        let mobile=new mobiledetails({
            mobilebrand:req.body.mobilebrand,
            price:req.body.price,
            color:req.body.color,
            quantity:req.body.quantity
        });
        await mobile.save();
        res.json({
            message:"mobile successfull created"
        })

    }catch (error){
        res.json({
            message:"Mobile not created"
        })
    }
}

// |=========== Update method start ===============|

const update_mobile = async (req, res)=>{
    try{
        let userId = req.body.userId;
        console.log(userId)
        let updatemobile = {
            mobilebrand: req.body.mobilebrand,
            price: req.body.price,
            color: req.body.color,
            quantity: req.body.quantity
        }
        await mobiledetails.findByIdAndUpdate(userId, {$set: updatemobile})
        res.json({
            message: "Mobile Updated",
        });
    }catch (error) {
        res.json({
            message: "error",
        });
    }
};

// |=========== get method start ===============|

const getMobile=async(req,res)=>{
    try{
        let mobile=await mobiledetails.find();
        res.json(mobile)
    }catch(error){
        res.json({
            message:"error"
        })
    }
}

// |=========== delete Method start ===============|

const deleteMobile = async (req, res)=>{
    try{
        let mobileId = req.body.mobileId;
        console.log(mobileId)
        await mobiledetails.findByIdAndDelete(mobileId);
        res.json({
            message:"Mobile deleted",
        })
    } catch (error) {
        res.json({
            message:"error",
        });
    }
};tynker



module.exports={
    mobile_brand,
    update_mobile,
    getMobile,
    deleteMobile
}





// const userdetail = require('../Model/usermodel')


// const create_user = async(req,res)=>{
//     try{
//         let user = new userdetail({
//             name:req.body.name,
//             email:req.body.email,
//             phone:req.body.phone
//         });

//         await user.save();
//         res.json({
//             message:"user created succesful"
//         })
        
//     }catch (error){

//         res.json({
//             message:"user not Created"
//         })
//     }
// }

// module.exports={
//     create_user 
// }
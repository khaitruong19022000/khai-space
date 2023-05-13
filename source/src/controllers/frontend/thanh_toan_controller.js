
const renderName = `frontend/page/`;

module.exports = {

    CheckOut: async (req , res , next) => {
        res.render(`${renderName}check_out`,{
        }) 
    },

}
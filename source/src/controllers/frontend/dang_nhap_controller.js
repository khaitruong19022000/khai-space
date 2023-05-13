
const renderName = `frontend/page/`;

module.exports = {

    ListLogin: async (req , res , next) => {
        if(req.isAuthenticated()) res.redirect('/')
        res.render(`${renderName}login`,{
        })
    },

}
const axios=require('axios')
url='https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCXSAY_XaH_Ut_SdWg-nLwYVxyzNsjQKIc'
async function generateAnswer()
{
    const response=await axios({
        url:url,
        method:"post",
        data:{
            contents:[
                {parts:[{
                    text:"How is Hong Kong"
                }]}
            ]
        }
    });
    console.log(response['data']['candidates'][0]['content'])
}
generateAnswer()
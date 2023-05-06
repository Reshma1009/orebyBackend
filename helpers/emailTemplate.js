function emailTemplate ( token )
{
  console.log("token", token);
  return `<div><img style="width:100px" src="https://i.ibb.co/ZL20JXH/Logo.png" alt=""><div><p>Please verify your mail ${token}</p><button style="background-color:#262626;color:#fff;padding:10px 20px;border-radius:10px;cursor:pointer">Click me</button></div></div>`;
}
module.exports = emailTemplate;

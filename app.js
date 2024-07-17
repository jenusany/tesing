document.getElementById('loginButton').onclick = function() {
    const appId = '803246971960239';
    const redirectUri = 'https://jenusany.github.io/tesing/';
    const authUrl = `https://www.facebook.com/v11.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}&scope=instagram_basic,pages_show_list`;
  
    window.location.href = authUrl;
  };
  const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

if (code) {
// Exchange the code for an access token
fetch(`https://graph.facebook.com/v11.0/oauth/access_token?client_id=803246971960239&redirect_uri=https://jenusany.github.io/tesing/&client_secret=c19298b4ce75926bf2dc0177b77e5912&code=${code}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const accessToken = data["access_token"];
    console.log(accessToken)

    fetch(`https://graph.facebook.com/v20.0/me/businesses?access_token=${accessToken}`)
        .then(response => response.json())
        .then(data => {
            let businesses = data["data"]
            console.log(businesses)
            console.log(businesses[0])
            //
        })
  })
  .catch(error => console.error('Error:', error));
}
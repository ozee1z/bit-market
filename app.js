const apiKey = "coinranking0dfc210581401a0a038f41d12112e0c92e7870db187c7429";

const options = {
    headers: {
      'x-access-token': apiKey,
    },
  };
  
  fetch('https://api.coinranking.com/v2/coins?limit=10', options)
    .then((response) => response.json())
    .then((result) => {
        let coinsData = result.data.coins;
        console.log(coinsData);

        

        if(coinsData.length > 0){
            let cryptoCoins = "";

            coinsData.forEach((coin) =>{
                cryptoCoins += "<tr>"
                cryptoCoins += `<td> ${coin.rank} </td>`;
                cryptoCoins += `<td> ${coin.name} </td>`;
                cryptoCoins += `<td>$ ${Math.round(coin.price * 100) / 100}</td>`;
                cryptoCoins += `<td> ${coin.change} </td>`;
                cryptoCoins += `<td>$ ${Math.round(coin.marketCap * 100) / 100} Billion</td>`;
                cryptoCoins += `<td> ${coin.symbol} </td>`;
                cryptoCoins += "</tr>";
            })

            document.getElementById("data").innerHTML = cryptoCoins;
        }

       
    });


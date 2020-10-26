console.log("The popup file has been called")

async function healthCheck() {
    console.log("Hooooorayyyyy!!!!")

    try {
        const result = await fetch('http://agora-data-aggregation.herokuapp.com/v1/health/openBankingApi/CBA')
        
        console.log("the result is ", result)

    } catch (error) {
        console.log("Error ", error)
        }
    // } 
}

function clickHandler(e) {
    healthCheck()
  }

function main() {
    // Initialization work goes here.
  }

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', clickHandler);
    main();
  });
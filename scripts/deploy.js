async function main() {

    const BurnContract = await ethers.getContractFactory("BurnContract");
 
    const burn = await BurnContract.deploy();
 
    console.log("Contract deployed to address:", burn.address);
}
 
main()
 
   .then(() => process.exit(0))
 
   .catch(error => {
 
     console.error(error);
 
     process.exit(1);
 
});
 
 
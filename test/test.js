const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("BurnContract", function () {
  let BurnContract;
  let sut;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();
    BurnContract = await ethers.getContractFactory("BurnContract");
    sut = await BurnContract.deploy();
    await sut.deployed();
  });

  async function sendOneEthFromOwnerToContract() {
    return owner.sendTransaction({
      to: sut.address,
      value: ethers.utils.parseEther("1.0"),
    });
  }

  it("Should be able to receive eth", async function () {
    const oldBalance = await ethers.provider.getBalance(sut.address);

    await sendOneEthFromOwnerToContract();

    const newBalance = await ethers.provider.getBalance(sut.address);

    expect(ethers.utils.parseEther("1.0").add(oldBalance).eq(newBalance));
  });

  it("Should emit a Burned event", async function () {

    await expect(await sendOneEthFromOwnerToContract()).to.emit(sut, "Burned");
  });

  it("Should emit a Burned event with data", async function () {

    await expect(await sendOneEthFromOwnerToContract()).to.emit(sut, "Burned").withArgs(owner.address, ethers.utils.parseEther("1.0"));
  });
});
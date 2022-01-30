// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

/// @title A contract to burn ETH with
/// @notice This contract can be used to irrevocably burn ETH
contract BurnContract {

   /// @notice This event will fire whenever ETH was burned
   /// @param who The address the burned ETH originated from
   /// @param amount The amount of ETH burned
   event Burned(address who, uint amount);

   /// @notice Transactions sent to this contract will be handled in this fallback function
   fallback() external payable {
      emit Burned(msg.sender, msg.value);
   }
}

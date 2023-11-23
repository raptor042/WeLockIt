// SPDX-License-Identifier: MIT
pragma solidity =0.8.20;

interface IWeLockIt {
    function lock(
        address owner,
        address token,
        bool isLpToken,
        uint256 amount,
        uint256 unlockDate,
        string memory description
    ) payable external returns (uint256 lockId);

    function unlock(uint256 lockId) external;

    function editLock(
        uint256 lockId,
        uint256 newAmount,
        uint256 newUnlockDate
    ) external;
}
/* eslint curly: ["error", "multi"] */

module.exports = {
	win32: {
		url: 'https://github.com/nicehash/nheqminer/releases/download/0.5c/Windows_x64_nheqminer-5c.zip',
		binary: 'Windows_x64_nheqminer-5c/nheqminer.exe',
		arguments: address => ['-l', 'zec-us-east1.nanopool.org:6666', '-u',
			`t1YtcRXgoDsVj6sDhGA71sgdDLoR9Q1QcnL/${address}`, '-cd', '0', '-p', 'x'],
		parse: (minerOutput, line) => {
			const parts = line.split(' ');

			if (parts[6].startsWith('Sols/s'))
				minerOutput.sols = Number(parts[7]);

			if (parts[3] === 'Accepted' && parts[4] === 'share')
				minerOutput.shares++;
		}
	}
};

// [10:55:16][0x00006040] Speed [15 sec]: 47.4667 I/s, 91.8667 Sols/s
// [11:42:01][0x000033f0] stratum | Accepted share #4

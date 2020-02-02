const electronInstaller = require('electron-winstaller');

electronInstaller.createWindowsInstaller({
    appDirectory: '.',
    outputDirectory: '.',
    authors: 'Team 1418',
    exe: 'windows-installer.exe'
}).then(() => {
    console.log('Working!');
}).catch((e) => {
    console.log(`Error: ${e.message}`);
});

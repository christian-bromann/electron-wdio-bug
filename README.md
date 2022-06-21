# electron-wdio-bug

Allow to reproduce Electrons in-ability to change window size using Chromedriver. It is testing the VSCode application which is build with Electron.

You can test it locally by cloning the repository via:

```sh
git clone git@github.com:christian-bromann/electron-wdio-bug.git
cd electron-wdio-bug
```

and run the test:

```sh
npm install
npm run wdio
```

You will see the test failing due to:

```txt
[chrome 98.0.4758.141 mac os x #0-0]
[chrome 98.0.4758.141 mac os x #0-0] 1) Electron should allow to resize the window with Chromedriver
[chrome 98.0.4758.141 mac os x #0-0] unknown command: 'Browser.getWindowForTarget' wasn't found (Session info: chrome=98.0.4758.141)
```

You can also check the full logs in the failing [GitHub Action](https://github.com/christian-bromann/electron-wdio-bug/runs/6993840926?check_suite_focus=true).

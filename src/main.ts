import { app, BrowserWindow, Menu } from "electron";
import path from "path";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const menuTemplate: (
  | Electron.MenuItemConstructorOptions
  | Electron.MenuItem
)[] = [
  {
    label: "New",
    submenu: [
      {
        label: "Add Currency",
        click: () => {
          createCurrencyWindow();
        },
      },
      {
        label: "Add Media",
        click: () => {
          createMediaWindow();
        },
      },
      {
        label: "Add Advertisement",
        click: () => {
          createAdvertisementWindow();
        },
      },
    ],
  },
  {
    label: "Edit",
    submenu: [
      {
        label: "Edit Details",
        click: () => {
          createDetailsWindow();
        },
      },
      {
        label: "Edit Screen Orientation",
      },
      {
        label: "Edit Time Interval",
      },
      {
        label: "Edit Animation",
      },
    ],
  },
  {
    label: "Present",
    submenu: [
      { label: "Present Fullscreen" },
      { label: "Present in a new window" },
    ],
  },
  {
    label: "Preferences",
    submenu: [
      {
        label: "Settings",
      },
      {
        label: "About",
      },
      {
        label: "Quit",
        click: () => {
          app.quit();
        },
        accelerator: process.platform === "darwin" ? "Command+W" : "Ctrl+W",
      },
    ],
  },
];

const createCurrencyWindow = () => {
  const currencyWindow = new BrowserWindow({
    width: 400,
    height: 500,
    title: "Add or Update Currency",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      backgroundThrottling: false,
    },
  });
  loadWindow(currencyWindow, "currency");
};

const createAdvertisementWindow = () => {
  const advertisementWindow = new BrowserWindow({
    width: 400,
    height: 500,
    title: "Add or Update Advertisement",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      backgroundThrottling: false,
    },
  });
  loadWindow(advertisementWindow, "advertisement");
};

const createMediaWindow = () => {
  const mediaWindow = new BrowserWindow({
    width: 400,
    height: 500,
    title: "Add or Update Media",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      backgroundThrottling: false,
    },
  });

  loadWindow(mediaWindow, "media");
};

const createDetailsWindow = () => {
  const detailsWindow = new BrowserWindow({
    width: 400,
    height: 500,
    title: "Update Details",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      backgroundThrottling: false,
    },
  });
  loadWindow(detailsWindow, "details");
};

const loadWindow = (window: BrowserWindow, page: string) => {
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    window.loadURL(`${MAIN_WINDOW_VITE_DEV_SERVER_URL}?page=${page}`);
  } else {
    window.loadFile(
      path.join(
        __dirname,
        `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html?page=${page}`
      )
    );
  }
};

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      backgroundThrottling: false,
    },
  });

  loadWindow(mainWindow, "home");

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

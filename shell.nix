with import <nixpkgs> {};


mkShell {
    nativeBuildInputs = [
        yarn
        electron_26
        dpkg
        fakeroot
        rpm
    ];

    ELECTRON_OVERRIDE_DIST_PATH = "${electron_26}/bin/";
}
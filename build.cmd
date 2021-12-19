:: Oversimplified Build Script
echo off

:: Copying html files
echo copying html files
robocopy src\ dist\  *.html /mir /xc > nul

:: Setting up html files
echo.
echo setting html variables
:: get fart from https://sourceforge.net/projects/fart-it/
tools\fart.exe .\dist\ "$git_version$" "github"

:: Copying js
echo.
echo copying js
robocopy src\kit\js dist\kit\js\ /mir /xc > nul

:: Copying libs
echo.
echo copying libs
robocopy src\kit\lib\ dist\kit\lib\ /mir /xc > nul

:: Setting up libs
echo.
echo setting up libs
tools\fart.exe .\dist\kit\lib\scoreboard\ac-scoreboard.js "$ac_scoreboard_location$" " /kit/lib/scoreboard"

:: Copying img
echo.
echo copying img
robocopy src\img\ dist\img\ /mir /xc > nul

:: Copying locale files
echo.
echo copying language files
robocopy src\locales\ dist\locales\ /mir /xc > nul

:: Copying config file
echo.
echo copying config files
robocopy src\config\ dist\config\ /mir /xc > nul

:: Building css
echo.
echo building css
robocopy src\kit\css\ dist\kit\css\ /mir /xc > nul
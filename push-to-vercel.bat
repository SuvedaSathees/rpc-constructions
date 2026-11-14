@echo off
cd /d "D:\RPC_Website\rpc-final"
echo ================================================
echo  Pushing branch "suve" to the Vercel repo
echo  remote: suveda  ^(SuvedaSathees/rpc-constructions^)
echo ================================================
echo.
git push suveda suve
set CODE=%errorlevel%
echo.
if "%CODE%"=="0" (echo  DONE - push succeeded.) else (echo  FAILED - exit code %CODE%)
echo.
echo Press any key to close...
pause >nul

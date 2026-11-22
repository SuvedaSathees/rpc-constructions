@echo off
cd /d "D:\RPC_Website\rpc-final"
echo ================================================
echo  Updating branch "suve" and pushing it
echo  origin = the repo Vercel deploys (rpc-website)
echo  suveda = the copy on SuvedaSathees/rpc-constructions
echo ================================================
echo.
git add -A
git commit -m "Fix bugs from the website QA report"
git fetch origin
git merge -X ours origin/suve -m "Merge origin/suve"
if errorlevel 1 (echo  FAILED - merge stopped, see above & goto end)
git push origin suve
set CODE=%errorlevel%
git push suveda suve
echo.
if "%CODE%"=="0" (echo  DONE - pushed. Now open Vercel and Redeploy if it says Blocked.) else (echo  FAILED - push to origin, exit code %CODE%)
:end
echo.
echo Press any key to close...
pause >nul

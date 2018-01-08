d:
cd D:\Projects\JadeFlixFrontend
cmd.exe /c ng build --env=prod --prod --base-href=/jadeflix/
"c:\Program Files\PuTTY\pscp.exe" D:\Projects\JadeFlixFrontend\dist\* pi@192.168.1.130:/home/pi/builds/jadeflix/front/

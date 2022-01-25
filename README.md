# playwright-test

testing playwright with github actions


 ## Anleitung zum Aufsetzen von Playwright Tests in Github actions

* testing directory machen
* dort Playwright installieren
	* https://playwright.dev/docs/intro
* Tests schreiben 
	* Tests in neuem Ordner e2e speichern
	* https://playwright.dev/docs/intro#first-test
* testDir definieren ```testDir: './e2e', ``` in playwright.config.ts
* Tests starten mit:
	* ```npx playwright test``` (Für normalen test)
	* ```npx playwright test --headed``` (Hilfreich beim Debuggen)

#### Github Actions:
* in repo "/.github/workflows/test_name.yml" erstellen
	* oder
* in der Github Website unter "Actions" einen neuen Workflow namens "Manual Workflow" auswählen und diesen abändern
* Template für die Datei:
	* https://playwright.dev/docs/ci
* Nach ```node-version: 14``` kann 
	 	 cache: 'npm'
          cache-dependency-path: testing/package-lock.json
	eingefügt werden um die npm packages zu cachen.

#### Lokaler Webserver
* Wenn gegen lokale Dateien getestet werden soll (nicht bestehende Website), so muss beim Testen ein Server aufgesetzt werden. 
* Ich benutze dafür https://www.npmjs.com/package/http-server installierbar via ```npm install http-server``` 
* Server wird wie folgt in ```playwright.config.ts``` eingebunden:

		webServer: {
			  command: 'npx http-server ../src/ -p 3000',
			  port: 3000,
		    timeout: 120 * 1000,
			  reuseExistingServer: !process.env.CI,
		 },
* ../src/ ist dabei der pfad zu eurer website im repo.



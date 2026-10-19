import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.6.2:0',
  releaseNotes: {
    en_US:
      'Updates Blisspoint to 0.6.2. Saved miner passwords can no longer be read back through the web interface: the server keeps them and applies them to control commands itself.',
    es_ES:
      'Actualiza Blisspoint a la versión 0.6.2. Las contraseñas de los mineros ya no se pueden leer desde la interfaz web: el servidor las guarda y las aplica él mismo a los comandos de control.',
    de_DE:
      'Aktualisiert Blisspoint auf 0.6.2. Gespeicherte Miner-Passwörter lassen sich nicht mehr über die Weboberfläche auslesen: Der Server bewahrt sie auf und setzt sie selbst für Steuerbefehle ein.',
    pl_PL:
      'Aktualizuje Blisspoint do wersji 0.6.2. Zapisanych haseł do minerów nie można już odczytać przez interfejs webowy: serwer przechowuje je i sam używa ich w poleceniach sterujących.',
    fr_FR:
      "Met à jour Blisspoint vers la version 0.6.2. Les mots de passe des mineurs enregistrés ne sont plus lisibles depuis l'interface web : le serveur les conserve et les applique lui-même aux commandes de contrôle.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

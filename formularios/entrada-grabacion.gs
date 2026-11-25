/**
 * Formulario de Google: "Canciones de entrada — Grabación"
 *
 * Cómo usarlo:
 *  1. Entrá a https://script.google.com y tocá "Nuevo proyecto".
 *  2. Borrá lo que haya y pegá todo este archivo.
 *  3. Elegí la función `crearFormulario` y tocá "Ejecutar" (la primera vez pide permisos).
 *  4. En "Registro de ejecución" aparecen los dos links: uno para editar y otro para compartir.
 */
function crearFormulario() {
  var form = FormApp.create('Canciones de entrada — Grabación')
    .setDescription('Completá con qué canción vas a entrar, con quién y desde qué minuto la usamos.')
    .setCollectEmail(false)
    .setProgressBar(true);

  // 1) Canción de entrada
  form.addPageBreakItem().setTitle('🎵 La música con la que vas a entrar');
  form.addTextItem()
    .setTitle('Canción')
    .setHelpText('Nombre de la canción y artista (ej: "Mr. Brightside — The Killers")')
    .setRequired(true);
  form.addTextItem()
    .setTitle('Link (opcional)')
    .setHelpText('YouTube, Spotify, etc.');

  // 2) Con quién
  form.addPageBreakItem().setTitle('👥 Con quién vas a entrar');
  form.addTextItem()
    .setTitle('¿Con qué persona vas a entrar?')
    .setHelpText('Si entrás solo/a, poné "Solo/a".')
    .setRequired(true);

  // 3) Minuto de la canción
  form.addPageBreakItem().setTitle('⏱️ Qué minuto de la canción usar');
  form.addTextItem()
    .setTitle('¿Desde qué minuto?')
    .setHelpText('Formato mm:ss (ej: 01:23)')
    .setValidation(FormApp.createTextValidation()
      .requireTextMatchesPattern('^[0-9]{1,2}:[0-5][0-9]$')
      .setHelpText('Usá el formato mm:ss, por ejemplo 01:23')
      .build())
    .setRequired(true);

  Logger.log('Editar:    ' + form.getEditUrl());
  Logger.log('Compartir: ' + form.getPublishedUrl());
}

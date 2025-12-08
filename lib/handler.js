const fs = require('fs');
const path = require('path');

/**
 * Loads all command files from the plugins directory.
 * @param {string} pluginDir The path to the plugins directory.
 * @returns {Map<string, object>} A map where keys are command names and values are the exported command modules.
 */
const loadPlugins = (pluginDir) => {
  const pluginMap = new Map();
  if (!fs.existsSync(pluginDir)) {
    console.log('Plugins directory not found, creating it.');
    fs.mkdirSync(pluginDir, { recursive: true });
    return pluginMap;
  }

  const pluginFiles = fs.readdirSync(pluginDir).filter(file => file.endsWith('.js'));
  console.log(`Found ${pluginFiles.length} plugins.`);

  for (const file of pluginFiles) {
    const filePath = path.join(pluginDir, file);
    try {
      const plugin = require(filePath);
      if (plugin.name && typeof plugin.execute === 'function') {
        pluginMap.set(plugin.name, plugin);
        console.log(`[+] Loaded plugin: ${plugin.name}`);
      } else {
        console.warn(`[!] Plugin ${file} is missing required exports (name or execute).`);
      }
    } catch (error) {
      console.error(`[!] Failed to load plugin ${file}:`, error);
    }
  }
  return pluginMap;
};

module.exports = { loadPlugins };

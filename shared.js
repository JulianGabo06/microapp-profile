/**
 * Contrato shared con el host (Module Federation).
 * Mantener las mismas versiones de react / react-native que MicroApps/packages/shared.
 */
function getSharedDependencies(eager) {
  return {
    react: {
      singleton: true,
      eager,
      requiredVersion: '19.2.3',
    },
    'react-native': {
      singleton: true,
      eager,
      requiredVersion: '0.85.3',
    },
  };
}

module.exports = {
  getSharedDependencies,
  FEDERATION_NAME: 'profile',
  DEV_PORT: 9002,
};

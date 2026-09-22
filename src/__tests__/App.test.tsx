import { render, screen } from '@testing-library/react-native';
import ProfileApp from '../App';

describe('ProfileApp', () => {
  it('muestra la cabecera con avatar, nombre y rol', async () => {
    await render(<ProfileApp />);

    expect(screen.getByText('mini app · profile')).toBeOnTheScreen();
    expect(screen.getByText('JG')).toBeOnTheScreen();
    expect(screen.getByText('Julián García')).toBeOnTheScreen();
    expect(screen.getByText('Mobile Engineer · Portfolio')).toBeOnTheScreen();
  });

  it.each([
    ['Equipo', 'Pragma · microfrontends'],
    ['Stack demo', 'Expo · Re.Pack · Floci S3'],
  ])('la tarjeta muestra "%s": %s', async (label, value) => {
    await render(<ProfileApp />);

    expect(screen.getByText(label)).toBeOnTheScreen();
    expect(screen.getByText(value)).toBeOnTheScreen();
  });

  it('indica desde dónde se sirve el bundle', async () => {
    await render(<ProfileApp />);

    expect(
      screen.getByText('Este bundle se sirve desde el puerto 9002 (o desde S3/Floci).'),
    ).toBeOnTheScreen();
  });
});

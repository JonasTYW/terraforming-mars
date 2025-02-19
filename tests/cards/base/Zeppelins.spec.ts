import {expect} from 'chai';
import {setOxygenLevel} from '../../TestingUtils';
import {Zeppelins} from '../../../src/server/cards/base/Zeppelins';
import {IGame} from '../../../src/server/IGame';
import {TestPlayer} from '../../TestPlayer';
import {testGame} from '../../TestGame';

describe('Zeppelins', () => {
  let card: Zeppelins;
  let player: TestPlayer;
  let game: IGame;

  beforeEach(() => {
    card = new Zeppelins();
    [game, player] = testGame(2);
  });

  it('Can not play', () => {
    setOxygenLevel(game, 4);
    expect(card.canPlay(player)).is.not.true;
  });
  it('Should play', () => {
    setOxygenLevel(game, 5);
    expect(card.canPlay(player)).is.true;

    const lands = game.board.getAvailableSpacesOnLand(player);
    game.addCity(player, lands[0]);

    card.play(player);
    expect(player.production.megacredits).to.eq(1);
    expect(card.getVictoryPoints(player)).to.eq(1);
  });
});


import {Color} from '../common/Color';
import {TileType} from '../common/TileType';
import {SpaceBonus} from '../common/boards/SpaceBonus';
import {SpaceType} from '../common/boards/SpaceType';
import {SpaceId} from '../common/Types';

export type SpaceHighlight = undefined | 'noctis' | 'volcanic';

export interface SpaceModel {
    id: SpaceId;
    x: number;
    y: number;
    bonus: Array<SpaceBonus>;
    color: Color | undefined;
    tileType: TileType | undefined;
    spaceType: SpaceType;
    highlight: SpaceHighlight;
}

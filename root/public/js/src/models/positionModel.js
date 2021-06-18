import Model from '../../helpers/model.js';
import {dataPositions} from '../data/dataPositions.js'

/// PositionModel объект для работы(CRUD) с данными
class PositionModel extends Model {
    constructor() {
        super()
    }

    // получение должностей
    getPositions() {
        return this.post('/position/all')
    }
}
const positionModel = new PositionModel();
export default positionModel
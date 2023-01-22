//  DEPENDENCIES //
import { Link, Routes } from 'react-router-dom';
import { deleteZombie } from '../../utils/api';


export default function Weapon({ zombie }) {
    return (
        <div>
            <Link className="button is-danger" onClick={() => deleteZombie(zombie._id)} to='/outcome'>Pull Trigger</Link>
        </div>
    )
}
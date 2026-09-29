import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

export default { title: 'UI/Tooltip', component: Tooltip, parameters: { layout: 'padded' } };
export const Default = { args: { content: 'Refine your search by using filters', open: true, children: <Button variant="outline">Filters</Button> } };

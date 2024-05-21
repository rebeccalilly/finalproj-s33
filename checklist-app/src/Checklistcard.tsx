import { useState } from "react";
import {
    Card,
    CardBody,
    Typography,
    Button,
    Collapse
} from "@material-tailwind/react";
import Listitem from "./Listitem"

function Checklistcard() {
    const [open, setOpen] = useState(true);

    const toggleOpen = () => setOpen((cur) => !cur);

    const color = "blue";

    const [title, setTitle] = useState("New list");

    const Item = () => {
        return <Listitem color={color} />;
    };

    const [itemList, setItemList] = useState([]);

    const onAddBtnClick = event => {
        setItemList(itemList.concat(<Item key={itemList.length} />));
    };

    return (
        <>
            <Collapse open={open} className="collapse_env">
                <Card className="checklist_card">
                    <CardBody>
                        <Typography variant="h5" color={color} className="mb-2">
                            <input id="input_title" type="text" placeholder={title} className="title" onChange={e => setTitle(e.target.value)} />
                        </Typography>
                        <Typography className="list_body">
                            {itemList}
                        </Typography>
                        <Button onClick={onAddBtnClick} className="add_item" variant="text" color={color}>+</Button>
                    </CardBody>
                </Card>
            </Collapse>
            <Button onClick={toggleOpen} className="checklist_name" color={color}>{title}</Button>
        </>
    );

}

export default Checklistcard;
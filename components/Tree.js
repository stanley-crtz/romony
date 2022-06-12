import React from 'react'
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Categories } from 'config/Categories';


function StyledTreeItem(props) {
    const {
        bgColor,
        color,
        labelIcon: LabelIcon,
        labelInfo,
        labelText,
        onClick,
        child,
        reference,
        ...other
    } = props;

    return (
        <TreeItem
            label={
                <Box
                    sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}
                    onClick={
                        () => child.length > 0 ? null : onClick(reference)
                    }
                >
                    <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                        {labelText}
                    </Typography>
                </Box>
            }
            defaultChecked={other.nodeId === 1}
            {...other}
        />
    );
}

const Tree = ({ onClick }) => {

    return (
        <TreeView
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
            sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
            {
                Categories.map((category) => (
                    <StyledTreeItem
                        nodeId={category.id}
                        labelText={category.name}
                        key={category.id}
                        onClick={onClick}
                        child={category.children}
                        reference={[category.name]}
                    >
                        {
                            category.children.map((child) => (
                                <StyledTreeItem
                                    nodeId={child.id}
                                    labelText={child.name}
                                    key={child.id}
                                    onClick={onClick}
                                    child={child.children}
                                    reference={[category.name, child.name]}
                                >
                                    {
                                        child.children.map((childSon) => (
                                            <StyledTreeItem
                                                nodeId={childSon.id}
                                                labelText={childSon.name}
                                                key={childSon.id}
                                                onClick={onClick}
                                                child={childSon.children}
                                                reference={[category.name, child.name, childSon.name]}
                                            />
                                        ))
                                    }
                                </StyledTreeItem>
                            ))
                        }
                    </StyledTreeItem>
                ))
            }
        </TreeView>
    )
}

export default Tree
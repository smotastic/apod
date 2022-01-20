import { Card, CardMedia, CardContent, Typography, CardActions, Button, Avatar, CardHeader, IconButton, IconButtonProps, Collapse } from "@mui/material";
import { ApodDetails } from "../../data/apod";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
type ApodCardProps = {
    data: ApodDetails
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ApodCard({ data }: ApodCardProps) {
    const [expanded, setExpanded] = useState(false);
    const [cardHeight, setCardHeight] = useState('250px');

    useEffect(() => {
        if(expanded) {
            setCardHeight('100%');
        } else {
            setTimeout(() => {
                setCardHeight('250px');
            }, 500)
        }
    }, [expanded])

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card sx={{ width: 350, height: cardHeight }}>
            <CardHeader
                sx={{ height: '100px' }}
                action={
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />

                    </ExpandMore>
                }
                title={data.title}
                subheader={`${data.date} ${data.copyright && `© ${data.copyright}`}`}
            />
            <CardMedia
                component="img"
                height="150"
                image={data.url}
                alt={data.title}
            />

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {data.explanation}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}
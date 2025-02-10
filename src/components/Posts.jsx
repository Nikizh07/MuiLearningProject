import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";  


const Posts = () => {
return (
    <div>
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
                        A
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Avocado Toast"
                subheader="October 10, 2023"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This delicious avocado toast is a perfect breakfast or snack. Add a
                    sprinkle of chili flakes for an extra kick.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox
                        icon={<FavoriteBorderIcon />}
                        checkedIcon={<FavoriteIcon />}
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
        <br />
        
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
                        B
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Banana Smoothie"
                subheader="October 11, 2023"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This refreshing banana smoothie is perfect for a quick breakfast or
                    post-workout snack. Blend with a handful of spinach for added
                    nutrients.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox
                        icon={<FavoriteBorderIcon />}
                        checkedIcon={<FavoriteIcon />}
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>

        <br />
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
                        C
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Chia Pudding"
                subheader="October 12, 2023"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This chia pudding is a healthy and delicious breakfast option. Top
                    with fresh berries and a drizzle of honey for extra sweetness.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox
                        icon={<FavoriteBorderIcon />}
                        checkedIcon={<FavoriteIcon />}
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
        <br />
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
                        C
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Chia Pudding"
                subheader="October 12, 2023"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This chia pudding is a healthy and delicious breakfast option. Top
                    with fresh berries and a drizzle of honey for extra sweetness.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox
                        icon={<FavoriteBorderIcon />}
                        checkedIcon={<FavoriteIcon />}
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
        <br />
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
                        C
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Chia Pudding"
                subheader="October 12, 2023"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This chia pudding is a healthy and delicious breakfast option. Top
                    with fresh berries and a drizzle of honey for extra sweetness.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox
                        icon={<FavoriteBorderIcon />}
                        checkedIcon={<FavoriteIcon />}
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
        <br />
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
                        C
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Chia Pudding"
                subheader="October 12, 2023"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This chia pudding is a healthy and delicious breakfast option. Top
                    with fresh berries and a drizzle of honey for extra sweetness.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox
                        icon={<FavoriteBorderIcon />}
                        checkedIcon={<FavoriteIcon />}
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
        <br />
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
                        C
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Chia Pudding"
                subheader="October 12, 2023"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This chia pudding is a healthy and delicious breakfast option. Top
                    with fresh berries and a drizzle of honey for extra sweetness.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox
                        icon={<FavoriteBorderIcon />}
                        checkedIcon={<FavoriteIcon />}
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    </div>
);
};

export default Posts;

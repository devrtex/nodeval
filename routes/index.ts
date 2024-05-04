import { Hono,Context } from "hono";
const router = new Hono();
router.get("/", (c:Context) => {
    return c.json({msg: "Welcome to Valorant's API, for getting the list of all routes, go to /routes"});
});
export default router;
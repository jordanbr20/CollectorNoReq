import { DependencyContainer } from "tsyringe";

import { ILogger } from "@spt/models/spt/utils/ILogger";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";

class Mod implements IPostDBLoadMod 
{

    public postDBLoad(container: DependencyContainer): void {
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const tables: IDatabaseTables = databaseServer.getTables();
        const logger = container.resolve<ILogger>("WinstonLogger");

        // Get Collectors quest and push conditions for the quest to be met.
        tables.templates.quests["5c51aac186f77432ea65c552"].conditions.AvailableForFinish.push(
            tables.templates.quests["5c51aac186f77432ea65c552"].conditions.AvailableForStart[0]
        )
        tables.templates.quests["5c51aac186f77432ea65c552"].conditions.AvailableForStart = [
            {
                "compareMethod": ">=",
                "conditionType": "Level",
                "dynamicLocale": false,
                "globalQuestCounterId": "",
                "id": "5d777f5d86f7742fa901bc77",
                "index": 0,
                "parentId": "",
                "value": 5,
                "visibilityConditions": [],
                "target": ""
            }
        ]
        // Log the fact that the script has ran and completed.
        logger.info("Collector No Requirements has finished.")
    }
}
export const mod = new Mod();
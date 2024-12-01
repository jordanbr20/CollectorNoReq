"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod = void 0;
class Mod {
    postDBLoad(container) {
        const databaseServer = container.resolve("DatabaseServer");
        const tables = databaseServer.getTables();
        const logger = container.resolve("WinstonLogger");
        // Get Collectors quest and push conditions for the quest to be met.
        tables.templates.quests["5c51aac186f77432ea65c552"].conditions.AvailableForFinish.push(tables.templates.quests["5c51aac186f77432ea65c552"].conditions.AvailableForStart[0]);
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
        ];
        // Log the fact that the script has ran and completed.
        logger.info("Collector No Requirements has finished.");
    }
}
exports.mod = new Mod();
//# sourceMappingURL=mod.js.map
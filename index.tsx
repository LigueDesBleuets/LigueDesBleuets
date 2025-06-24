import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function LigueDesBleuets() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Ligue des bleuets</h1>

      <Tabs defaultValue="classement" className="mb-6">
        <TabsList>
          <TabsTrigger value="classement">Classement</TabsTrigger>
          <TabsTrigger value="equipes">Équipes</TabsTrigger>
          <TabsTrigger value="mouvements">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="classement">
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Équipe</TableHead>
                    <TableHead>Victoires</TableHead>
                    <TableHead>Défaites</TableHead>
                    <TableHead>PTS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Montréal</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Toronto</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="equipes">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Canadiens de Montréal</h2>
              <p>DG : Toi (humain)</p>
              <ul className="list-disc list-inside">
                <li>Nick Suzuki – C</li>
                <li>Cole Caufield – LW</li>
                <li>Juraj Slafkovský – RW</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mouvements">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Dernier échange</h2>
              <p><strong>Montréal reçoit</strong> : Anton Lundell, choix de 2e ronde (2026)</p>
              <p><strong>Floride reçoit</strong> : Patrik Laine</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Button className="mt-4">Soumettre une offre</Button>
    </div>
  );
}
